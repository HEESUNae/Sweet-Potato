import React from 'react';
import { NavigateOptions, useNavigate } from 'react-router-dom';

const useCommon = () => {
  const navigate = useNavigate();

  // 페이지 네비게이션
  const navigation = (url: string, params?: NavigateOptions) => {
    navigate(url, params);
  };

  return {
    navigation,
  };
};

export default useCommon;
