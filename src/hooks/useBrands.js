import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Brand } from '../api/Brands';

export const useBrands = (search) => {
  const { data, isLoading } = useQuery({
    queryFn: () => Brand.getAllBrands(search),
    queryKey: ['brands', search],
  });
  return {
    data,
    isLoading,
  };
};
