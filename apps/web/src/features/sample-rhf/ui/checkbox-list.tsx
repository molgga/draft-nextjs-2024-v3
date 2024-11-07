import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/components/ui/form";
import { Checkbox } from "@ui/components/ui/checkbox";

type DefaultValueType = unknown;
type CheckedState = boolean | "indeterminate"; // shadcn CheckedState

interface CheckboxListProps<T = DefaultValueType> {
  fieldName: string;
  sourceList: { value: T; label: string }[];
}

interface CheckboxFormField<T = DefaultValueType> {
  value: T[];
  onChange: (checkedValue: T[]) => void;
}

interface CheckedCompareData<T = DefaultValueType> {
  field: CheckboxFormField<T>;
  checkValue: T;
}

type CheckedChangeEventHandler<T = DefaultValueType> = (evt: {
  field: CheckboxFormField<T>;
  checkValue: T;
  checked: CheckedState;
}) => void;

export function CheckboxList<T = string>(props: CheckboxListProps<T>) {
  const { fieldName, sourceList } = props;

  const formMethods = useFormContext();

  const isChecked = (data: CheckedCompareData<T>) => {
    const { field, checkValue } = data;
    return field.value.includes(checkValue);
  };

  const handleChecked: CheckedChangeEventHandler<T> = (evt) => {
    const { checked, field, checkValue } = evt;
    field.onChange(
      checked
        ? [...field.value, checkValue]
        : field.value.filter((exist) => exist !== checkValue),
    );
  };

  return (
    <FormField
      control={formMethods.control}
      name={fieldName}
      render={() => (
        <FormItem>
          {sourceList.map((check) => {
            return (
              <FormField
                key={check.value as string}
                name={fieldName}
                control={formMethods.control}
                render={({ field }) => {
                  return (
                    <FormItem className="ui-inline-flex ui-p-2">
                      <div className="ui-flex">
                        <FormControl>
                          <Checkbox
                            checked={isChecked({
                              field,
                              checkValue: check.value,
                            })}
                            onCheckedChange={(checked) =>
                              handleChecked({
                                checked,
                                field,
                                checkValue: check.value,
                              })
                            }
                          />
                        </FormControl>
                        <FormLabel className="ui-pl-2">{check.label}</FormLabel>
                      </div>
                    </FormItem>
                  );
                }}
              />
            );
          })}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
