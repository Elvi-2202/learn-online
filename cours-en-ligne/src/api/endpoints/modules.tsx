import { apiSlice } from '../apiSlice';

export const modulesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getModules: builder.query({
      query: () => '/modules',
    }),
    createModule: builder.mutation({
      query: (moduleData) => ({
        url: '/modules',
        method: 'POST',
        body: moduleData,
      }),
    }),
    
  }),
});

export const {
  useGetModulesQuery,
  useCreateModuleMutation,
} = modulesApiSlice;