import { useMutation } from '@tanstack/react-query';
import { Auth } from '../api/Auth';
import jwt_decode from 'jwt-decode';
import { useStateValue } from '../providers/StateContext';
export const useLogin = () => {
  const { state, dispatch } = useStateValue();
  return useMutation(Auth.login, {
    onSuccess: async (data) => {
      await AsyncStorage.setItem('token', data.token);
      const decoded = jwt_decode(data.token);
      dispatch({
        type: 'SET_USER',
        payload: decoded,
      });
    },
  });
};
