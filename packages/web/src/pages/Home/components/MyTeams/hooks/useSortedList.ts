import { useState, useMemo, useCallback } from "react";

function sortArrayByFieldName<T> (array: T[], field: string, direction: 'asc'|'desc'): T[] {
  const lessThanResult = direction === 'asc'?-1:1;
  const greaterThanResult = direction === 'asc'?1:-1;
  return array.sort((a, b) => {
    if((a as any)[field] < (b as any)[field]){
      return lessThanResult;
    }
    if((a as any)[field] > (b as any)[field]){
      return greaterThanResult;
    }
    return 0;
  });
};

interface Order<TFieldName> {
  field: TFieldName;
  direction: 'asc' | 'desc';
}

function useSortedList<TFieldName, TItem>(list: TItem[]):[
  TItem[],
  Order<TFieldName> | null,
  (field: TFieldName) => void,
] {
  const [order, setOrder] = useState<Order<TFieldName> | null>(null);
  const sortedList = useMemo(()=>{
    if(!order){
      return [...list];
    }
    return sortArrayByFieldName(list, order.field as unknown as string, order.direction)
  }, [list, order]);
  const changeOrder = useCallback((field: TFieldName) => {
    if(order && order.field === field){
      setOrder({
        field,
        direction: order.direction === 'asc'?'desc':'asc',
      });
      return;
    }
    setOrder({ field, direction: 'asc' });
  }, [order]);
  return [sortedList, order, changeOrder];
}

export { useSortedList };