import set from 'lodash/set';
import { useCallback, useState } from 'react';

export interface useFormState<T> {
  initialForm: T;
  schema: any;
}

export const useFormHook = <T>({ initialForm, schema }: useFormState<T>) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<T | null>(null);

  // Validate
  const validate = () => {
    return new Promise((resolve, reject) => {
      if (schema) {
        schema
          .validate(form, { abortEarly: false })
          .then(() => {
            setErrors(null);

            resolve({});
          })
          .catch(({ inner }: any) => {
            // Create new errors
            const e: any = {};

            if (Array.isArray(inner)) {
              inner.map((x: any) => (e[x.path] = x.message));
            }

            // Set new errors
            setErrors(e);

            reject(e);
          });
      } else {
        resolve({});
      }
    });
  };

  // Clear validate
  const reset = useCallback(() => {
    setErrors(null);
  }, []);

  // Set field value
  const setFieldValue = useCallback((name, value) => {
    setForm((pre: any) => set({ ...pre }, name, value));
  }, []);

  // Set field error
  const setFieldError = useCallback((name, message) => {
    setErrors((pre: any) => set({ ...pre }, name, message));
  }, []);

  // On field change
  const onChange = (value: any, name: string) => {
    setForm((pre: any) => set({ ...pre }, name, value));
    setFieldError(name, null);
  };

  // On blur
  const onBlur = () => {};

  return {
    form,
    errors,
    setForm,
    validate,
    reset,
    onChange,
    onBlur,
    setFieldError,
    setFieldValue,
  };
};

export default useFormHook;
