/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { forwardRef, useEffect, useMemo } from 'react';
import { PatchEvent, set, StringInputProps, unset, useFormValue } from 'sanity';
import { TextInput } from '@sanity/ui';

export function formatName(input: string) {
  let cleanedInput = input.replace(/^['"]|['"]$/g, '').trim(); // Remove the leading and trailing quotes (if any)

  cleanedInput = cleanedInput.replace(
    /^(Mr|Mrs|Ms|Dr|Prof|Professor|Rev|Sir|Lord|Mx)\.?\s*/i,
    ''
  ); // Remove common prefixes (Mr., Mrs., Ms., Dr., Prof., Professor, Rev., Sir, Lord, Mx., etc.)

  cleanedInput = cleanedInput.replace(/\./g, ''); // Remove all periods (.)

  const formattedName = cleanedInput.replace(/\s+/g, ''); // Remove any spaces between the first and last names

  return formattedName;
}

const FacultyIdInput = forwardRef<HTMLInputElement, StringInputProps>(
  (props, ref) => {
    const facultyName =
      (useFormValue(['content', 'head', 'name']) as string) ?? '';

    const idValue = useMemo(() => formatName(facultyName), [facultyName]);
    const {
      schemaType,
      elementProps,
      changed,
      focused,
      renderDefault,
      ...filteredProps
    } = props;

    const { value, onChange } = props;

    useEffect(() => {
      onChange(PatchEvent.from(idValue ? set(idValue) : unset()));
    }, [idValue]);

    return <TextInput ref={ref} readOnly value={idValue} />;
  }
);

FacultyIdInput.displayName = 'FacultyIdInput';

export default FacultyIdInput;
