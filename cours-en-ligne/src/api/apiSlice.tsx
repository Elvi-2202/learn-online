// apiSlice.tsx

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/Store'; // Assurez-vous que le chemin est correct

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://tree-learning-app.alwaysdata.net/api',
    credentials:"include",
    prepareHeaders: (headers) => {
      const accessToken = localStorage.getItem('accessToken')
      if (accessToken)
        headers.set('Authorization', `Bearer ${accessToken}`)
      console.log("Access Token:", accessToken);
      return headers
    },
    
  }),
  endpoints: (builder) => ({
    // Définissez vos endpoints ici si nécessaire
  }),
});

// Si vous n'avez pas d'endpoints à exporter pour le moment, vous pouvez simplement exporter l'apiSlice
export default apiSlice;

// Si vous avez des endpoints à exporter, faites-le comme ceci :
// export const { useYourEndpointQuery, useYourOtherEndpointMutation } = apiSlice;