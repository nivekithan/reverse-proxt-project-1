import { LoaderArgs, json } from "@remix-run/cloudflare";
import { V2_MetaFunction, useLoaderData } from "@remix-run/react";

export const loader = ({ request }: LoaderArgs) => {
  return json({ requestUrl: request.url });
};

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  const { requestUrl } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Remix Website: 1</h1>
      <p>Request URL: {requestUrl}</p>
    </div>
  );
}
