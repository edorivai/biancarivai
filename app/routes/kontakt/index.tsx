import { ActionArgs, json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { withZod } from "@remix-validated-form/with-zod";
import { ValidatedForm, validationError } from "remix-validated-form";
import { z } from "zod";
import { MoonIcon } from "@heroicons/react/outline";

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
  // const data = useActionData();
  return (
    <>
      <h1 className="text-center">Ich freue mich auf deine Nachricht!</h1>
      <p className="text-center">Hast du Fragen zu meinem Programm?</p>
      <p className="text-center">Oder willst du mir Feedback geben?</p>
      <div className="h-16" />
      <form
        className="flex flex-wrap gap-4"
        // validator={validator}
        method="post"
        action="https://submit-form.com/c9JGk6k8"
      >
        <FormInput name="fullName" label="Name" className="grow" />
        <FormInput name="email" label="Email" className="grow" />
        <TextArea name="message" label="Deine Nachricht" className="w-full" />
        <div className="grow" />
        <button
          type="submit"
          className="group bg-axolotl text-white px-[17px] py-[9px] text-[16px] uppercase font-medium tracking-[1px] inline-block my-[50px]"
        >
          <MoonIcon className="inline-block transition-all w-0 group-hover:w-4 mr-0 group-hover:mr-2" />
          Talk to me
        </button>
      </form>
    </>
  );
}

export function FormInput({
  name,
  label,
  placeholder,
  className,
}: {
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
}) {
  const id = `input-${name}`;
  return (
    <div className={className}>
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
  className,
}: {
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
}) {
  const id = `input-${name}`;
  return (
    <div className={className}>
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
