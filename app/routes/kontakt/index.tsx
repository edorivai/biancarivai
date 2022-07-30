import { ActionArgs, json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { withZod } from "@remix-validated-form/with-zod";
import { ValidatedForm, validationError } from "remix-validated-form";
import { z } from "zod";

export const validator = withZod(
  z.object({
    fullName: z.string().min(1, { message: "Full name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Must be a valid email"),
    message: z.string().min(1, { message: "Message is required" }),
  })
);

export async function action({ request }: ActionArgs) {
  const data = await validator.validate(await request.formData());
  if (data.error) return validationError(data.error);
  const { fullName, email, message } = data.data;

  return json({
    title: `Hi ${fullName}!`,
    description: `Your email is ${email} and your message is "${message}"`,
  });
}

export default function Contact() {
  const data = useActionData();
  return (
    <>
      <h1>Kontakt</h1>
      <ValidatedForm
        className="w-[400px] flex flex-col gap-4"
        validator={validator}
        method="post"
      >
        <FormInput name="fullName" label="Full Name" />
        <FormInput name="email" label="Email" />
        <TextArea name="message" label="Message" />
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        <button type="submit">Submit</button>
      </ValidatedForm>
    </>
  );
}

export function FormInput({
  name,
  label,
  placeholder,
}: {
  name: string;
  label: string;
  placeholder?: string;
}) {
  const id = `input-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          name={name}
          id={id}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-4 py-2 sm:text-sm border-gray-300 rounded-md"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export function TextArea({
  name,
  label,
  placeholder,
}: {
  name: string;
  label: string;
  placeholder?: string;
}) {
  const id = `input-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <textarea
          name={name}
          rows={5}
          id={id}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-4 py-2 sm:text-sm border-gray-300 rounded-md"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
