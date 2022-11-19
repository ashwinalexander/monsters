import "./search-box.styles.css";
import { ChangeEventHandler } from "react";

const func: (a: string, b: number, c: boolean) => void = (a, b, c) => {}; //function

//two ways to type objects
//type or an interface (extendable similar to class components)

//INTERFACES lets us extend or overload
//TYPES allows us to do a UNION (combination of types -= more like ORs than ANDs)
//functional programming = use types, more OO class programming = use Interfaces
type SearchBoxProps = {
  className: string;
  placeholder?: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
};

//func component: no internal state or access to lifecycle methods
export const SearchBox = ({
  placeholder,
  className,
  handleChange
}: SearchBoxProps) => (
  <input
    className={className}
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
