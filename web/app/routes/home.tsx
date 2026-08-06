import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "メモ帳管理アプリ" },
  ];
}

export default function Home() {
  return <h1>Hello World</h1>;
}
