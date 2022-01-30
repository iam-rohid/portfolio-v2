import React from "react";

const NewsLatterForm = () => {
  return (
    <div
      id="revue-embed"
      className="w-full bg-white dark:bg-gray-800 p-4 rounded-xl"
    >
      <h3 className="font-bold mb-1 text-2xl">Subscribe to the newsletter</h3>
      <p className="opacity-75 mb-4">
        Subscribe to my newsletter to get weakly news, tips and tricks on web
        development, tech and other interesting topics.
      </p>
      <form
        action="https://www.getrevue.co/profile/rohid/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
      >
        <div className="flex gap-4 flex-col sm:flex-row">
          <input
            className="flex-1 h-12 py-4 px-4 rounded-xl bg-gray-100 dark:bg-gray-700 focus:ring-2 ring-0 ring-primary-500 outline-none border-none"
            placeholder="Your email address..."
            type="email"
            name="member[email]"
            id="member_email"
          />
          <button
            name="member[subscribe]"
            id="member_submit"
            className="bg-primary-500 hover:bg-primary-600 flex items-center justify-center text-lg font-medium text-white rounded-xl px-6 h-12"
          >
            Subscribe
          </button>
        </div>
        <p className="opacity-75 mt-2">
          By subscribing, you agree with Revue’s{" "}
          <a
            target="_blank"
            className="font-medium"
            href="https://www.getrevue.co/terms"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            className="font-medium"
            href="https://www.getrevue.co/privacy"
          >
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  );
};

export default NewsLatterForm;
