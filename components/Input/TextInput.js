/** @jsxImportSource @emotion/react */

const placeholderColor = "#1e1e1e";

const textInputStyles = {
  border: "1px solid",
  // ...theme.elements.input,
  // margin: 0,
  "&:invalid": {
    boxShadow: "none",
  },
  "&::placeholder": {
    color: placeholderColor,
  },
  WebkitAppearance: "none",
};
const classNames = 'overflow-visible p-1 m-0 w-full h-12 text-base text-black rounded-none border border-gray-400 border-solid shadow-none appearance-none cursor-text md:text-base md:p-1'

/**
 * This Text Input component is an input field that is part of a form
 * Currently utilized in the 2ndPagePopup and Email Signup form
 * @param {*} props 
 * @returns An Input element with styles and destructured props
 */
export const TextInput = (props) => <input className={classNames} css={textInputStyles} {...props} />;
