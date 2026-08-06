//import typeは型チェックで使うもの、自動生成
import type { Route } from "./+types/home";

//metaでreact-routerが見つけて呼び出す
//分割代入の{}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "メモ帳管理アプリ" },
  ];
}

//default exportは1ファイルにつき1つ
//このコンポーネントが画面として使用される

export default function Home() {
  return <h1>Hello World</h1>;
}
