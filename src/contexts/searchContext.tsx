import React, {
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";

import { api } from "../service/api";
import { JokeServiceType, JokeType } from "../types/joke";

type SearchContextType = {
  loadingSearch: boolean;
  hasError: string | boolean;
  jokes: JokeType[];
  isResult: boolean;
  getJokes: (search: string) => void;
};

export const SearchContext = React.createContext({} as SearchContextType);

export const SearchContextProvider = ({ children }: PropsWithChildren) => {
  const [loadingSearch, setLoadingSearch] = useState<boolean>(false);
  const [isResult, setIsResult] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean | string>(false);
  const [jokes, setJokes] = useState<JokeType[]>([]);

  const getJokes = useCallback((search: string) => {
    setLoadingSearch(true);
    const params = {
      query: search,
    };
    api
      .get<JokeServiceType>("/search", { params })
      .then((response) => {
        setJokes(response.data.result);
        setHasError(false);
      })
      .catch((error) =>
        setHasError(error.response?.data?.message || "erro inesperado")
      )
      .finally(() => {
        setLoadingSearch(false);
        setIsResult(true);
      });
  }, []);

  const valuesProvider = useMemo(() => {
    return {
      isResult,
      hasError,
      jokes,
      loadingSearch,
      getJokes,
    };
  }, [isResult, hasError, jokes, loadingSearch, getJokes]);

  return (
    <SearchContext.Provider value={valuesProvider}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => React.useContext(SearchContext);
