import { apiSlice } from '../apiSlice';

export const modulesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getModules: builder.query({
      query: () => '/modules',
    }),
    getModule: builder.query({
      query: (id) => `/modules/${id}`,
    }),
    createModule: builder.mutation({
      query: (moduleData) => ({
        url: '/modules',
        method: 'POST',
        body: moduleData,
      }),
    }),
    updateModule: builder.mutation({
      query: ({ id, ...moduleData }) => ({
        url: `/modules/${id}`,
        method: 'PUT',
        body: moduleData,
      }),
    }),
    deleteModule: builder.mutation({
      query: (id) => ({
        url: `/modules/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetModulesQuery,
  useGetModuleQuery,
  useCreateModuleMutation,
  useUpdateModuleMutation,
  useDeleteModuleMutation,
} = modulesApiSlice;