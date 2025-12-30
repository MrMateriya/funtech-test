import Axios, { type AxiosRequestConfig } from "axios";
import useSWR, {type Fetcher, type Key, type SWRConfiguration} from "swr";

export const Http = Axios.create({
  baseURL: process.env["NEXT_PUBLIC_API_URL"],
  timeout: 120000,
});

type ApiGetParamsType = {
  axiosConfig?: AxiosRequestConfig;
};
type ApiPerformGetRequestProps = {
  url: string;
  apiParams?: ApiGetParamsType;
};

async function apiPerformGetSWRRequest<RESPONSE>(props: ApiPerformGetRequestProps) {
  const { url, apiParams: { axiosConfig = {} } = {} } = props;

  return await Http.get<RESPONSE>(url, {
    ...axiosConfig,
  }).then((r) => r.data);
}

type useFuntechSWRProps<RESPONSE> = {
  key: Key;
  apiParams?: ApiGetParamsType;
  swrOptions?: SWRConfiguration<RESPONSE, unknown, Fetcher<RESPONSE>>;
};

export function useFuntechSWR<RESPONSE>(props: useFuntechSWRProps<RESPONSE>) {
  const { key, apiParams, swrOptions } = props;

  const url = (Array.isArray(key) ? key[0] : key) as string;

  return useSWR<RESPONSE>(
    key,
    () => apiPerformGetSWRRequest<RESPONSE>({ url, apiParams }),
    swrOptions
      ? Object.fromEntries(
          Object.entries(swrOptions)
            .filter((el) => el[1] !== undefined)
            .map((el) => [el[0], el[1]]),
        )
      : undefined,
  );
}