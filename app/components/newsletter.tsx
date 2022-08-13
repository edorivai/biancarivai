import { useActionData, useTransition } from "@remix-run/react";
import { withZod } from "@remix-validated-form/with-zod";
import { useField, ValidatedForm } from "remix-validated-form";
import { z } from "zod";

export const validator = withZod(
  z.object({
    VORNAME: z.string().min(1, { message: "Name erforderlich" }),
    EMAIL: z
      .string()
      .min(1, { message: "E-Mail erfordelich" })
      .email("Bitte E-Mail überprüfen"),
  })
);
export function NewsletterBar() {
  const actionData = useActionData();
  const transition = useTransition();
  if (actionData?.success === true) {
    return (
      <h2 className="flex-center text-xl">
        Dankeschön! Du bist erfolgreich angemeldet!
      </h2>
    );
  }
  return (
    <ValidatedForm
      validator={validator}
      method="post"
      className="flex gap-4 justify-center p-12"
    >
      <h2 className="text-xl m-2">Soul 𓆸 Letter</h2>
      <Field
        disabled={transition.state === "submitting"}
        name="VORNAME"
        placeholder="Name"
      />
      <Field
        disabled={transition.state === "submitting"}
        name="EMAIL"
        placeholder="E-Mail"
      />
      <button
        type="submit"
        className="p-3 bg-axolotl text-white font-bold"
        disabled={transition.state === "submitting"}
      >
        {transition.state === "submitting"
          ? "Ein Moment bitte..."
          : "⋗ Deep Talk"}
      </button>

      <input type="hidden" name="email_address_check" value="" />
      <input type="hidden" name="locale" value="de" />
      <input type="hidden" name="html_type" value="simple" />
    </ValidatedForm>
  );
}

function Field(props: {
  name: string;
  placeholder: string;
  disabled?: boolean;
}) {
  const { getInputProps, error } = useField(props.name);
  return (
    <div className="flex flex-col gap-1">
      <input {...getInputProps({ id: props.name, ...props })} className="p-3" />
      {error && <div>{error}</div>}
    </div>
  );
}
