import { useMutation, useQuery } from '@tanstack/react-query';
import React from 'react';
import { DealerDevice } from '../api/DealerDevice';

export const useDealerDevice = async () => {
  const mutation = useMutation(DealerDevice.addDevice);
  return mutation;
};

export const useGetDealerDevice = async () => {
  return useQuery('Devices', DealerDevice.getDevices);
};

export const useGetDealerDeviceById = async (id) => {
  return useQuery(['Device', id], () => DealerDevice.getDeviceById(id));
};

export const useDeleteDealerDevice = async (id) => {
  const mutation = useMutation(DealerDevice.deleteDevice);
  return mutation;
};

export const useUpdateDealerDevice = async (id) => {
  const mutation = useMutation(DealerDevice.updateDevice);
  return mutation;
};
