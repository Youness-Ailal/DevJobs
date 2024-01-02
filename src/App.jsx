import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Jobs from "./pages/Jobs";
import Job from "./pages/Job";
import NewJob from "./pages/NewJob";
import NotFound from "./pages/NotFound";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DarkThemeProvider from "./context/DarkThemeProvider";
import FiltersProvider from "./context/FiltersProvider";

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <FiltersProvider>
        <DarkThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} />

          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="jobs" />} />
                <Route path="jobs" element={<Jobs />}></Route>
                <Route path="jobs/new" element={<NewJob />} />
                <Route path="*" element={<NotFound />} />
                <Route path="jobs/:id" element={<Job />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <Toaster
            toastOptions={{
              duration: 3000,
              style: {
                fontSize: "1rem",
              },
            }}
          />
        </DarkThemeProvider>
      </FiltersProvider>
    </QueryClientProvider>
  );
}
