import { useContext } from "react";
import { NavigationContext } from "react-navigation";

export const useNavigation = () => useContext(NavigationContext)