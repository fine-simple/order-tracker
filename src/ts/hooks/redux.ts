import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";
import type { RootState, AppDispatch } from "../store";

type DispatchFunc = () => AppDispatch;
export const useDispatch: DispatchFunc = useAppDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;
