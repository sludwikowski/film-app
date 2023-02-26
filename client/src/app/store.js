import { configureStore } from '@reduxjs/toolkit';

import userSlice from '@/features/userSlice';
import appStateSlice from '@/features/appStateSlice';
import authModalSlice from '@/features/authModalSlice';
import themeModeSlice from '@/features/themeModeSlice';
import globalLoadingSlice from '@/features/globalLoadingSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    themeMode: themeModeSlice,
    authModal: authModalSlice,
    globalLoading: globalLoadingSlice,
    appState: appStateSlice,
  },
});

export default store;
