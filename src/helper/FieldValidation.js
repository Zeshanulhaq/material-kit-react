import React from "react";
import { Input, FormFeedback } from "reactstrap";
import { checkEmail } from "./CheckEmail";
function Validation(props) {
  return (
    <React.Fragment>
      {props.type === "select" ? (
        <>
          <Input
            type="text"
            hidden
            invalid={
              props.value?.length === 0 && props.validation ? true : false
            }
          />
          <FormFeedback
            className="ml-1"
            invalid={
              props.value?.length === 0 && props.validation ? "true" : "false"
            }
          >
            {props.message ? props.message : "This Option is required!"}
          </FormFeedback>
        </>
      ) : props.type === "text" || props?.type === "number" ? (
        <FormFeedback
          className="ml-1"
          invalid={props.value === "" && props.validation ? "true" : "false"}
        >
          {props.message ? props.message : "This Option is required!"}
        </FormFeedback>
      ) : props.type === "email" ? (
        <FormFeedback
          className="ml-1"
          invalid={
            (props.value === "" || !checkEmail(props.value)) && props.validation
              ? "true"
              : "false"
          }
        >
          {!checkEmail(props.value) && props.value
            ? "invalid email!"
            : "This Option is required!"}
        </FormFeedback>
      ) : (
        props.type === "password" && (
          <FormFeedback
            className="ml-1"
            invalid={
              (props.value === "" ||
                props.value?.length < 8 ||
                props.value?.length > 16) &&
              props.validation
                ? "true"
                : "false"
            }
          >
            {(props.value?.length < 8 || props.value?.length > 16) &&
            props.value
              ? "password must be  8 to 16 character!"
              : "This Option is required!"}
          </FormFeedback>
        )
      )}
    </React.Fragment>
  );
}

export default Validation;
