# API設計

## 基本方針
- API方式はREST
- ベースパスは`/api/v1`
- 認証はSupabase Auth

## 認証

1. 機能一覧

- メールアドレスを使用してアカウントを新規作成できる
- メールアドレスとパスワードを使用してログインできる
- ログアウトできる
- 認証にはSupabase Authを使用する
- ユーザー登録・ログイン・ログアウトは、ReactからSupabase SDKを通じて行う
- アプリ独自の登録・ログイン・ログアウトAPIは作成しない
- 自作APIを呼び出す際は、Supabase Authのアクセストークンを送信する
- バックエンドはアクセストークンを検証し、ログインユーザーを特定する

2. 対応するSupabase Authの操作

- 登録: `supabase.auth.signUp()`
- ログイン: `supabase.auth.signInWithPassword()`
- ログアウト: `supabase.auth.signOut()`

## プロフィール機能

1. 機能一覧

- 初回ログイン時にアプリプロフィールを作成できる
- `username` を取得できる
- `username` を変更できる
- プロフィールの初期設定時にデフォルトフォルダを作成する

2. 対応するエンドポイント

- 初期設定: PUT /api/v1/profile
- 取得: GET /api/v1/profile
- 更新: PATCH /api/v1/profile

## フォルダ機能

1. 機能一覧

- フォルダが一覧できる
- フォルダを新規作成できる
- フォルダの名前を編集できる
- フォルダを削除できる

2. 対応するエンドポイント

- 一覧: GET /api/v1/folders
- 新規作成: POST /api/v1/folders
- 編集: PATCH /api/v1/folders/{folderId}
- 削除: DELETE /api/v1/folders/{folderId}

## メモ機能

1. 機能一覧

- フォルダの中にメモを新規作成できる
- フォルダを作成せずともメモを新規作成できる(元々一つの大きなフォルダがある)
- メモを一覧できる
- メモを閲覧できる(必要？)
- メモを編集できる
- メモを削除できる
  - ゴミ箱に移動する

2. 対応するエンドポイント

- 新規作成: POST /api/v1/memos
- 一覧: GET /api/v1/memos
- 閲覧: GET /api/v1/memos/{memoId}
- 編集: PATCH /api/v1/memos/{memoId}
- 削除: DELETE /api/v1/memos/{memoId}

## ゴミ箱機能

1. 機能一覧

- 削除済みメモを閲覧できる
- ゴミ箱からメモを復元
- ゴミ箱からメモを削除

2. 対応するエンドポイント

- 一覧: GET /api/v1/trash/memos
- 復元: POST /api/v1/memos/{memoId}/restore
- 完全削除: DELETE /api/v1/trash/memos/{memoId}

## 共有機能

1. 機能一覧

- メモを共有できる
- 共有した相手を一覧できる
- 所有者が共有を解除できる
- 共有されたメモを一覧できる
- 共有されたユーザーが自分への共有を解除できる

2. 対応するエンドポイント

- 共有する: POST /api/v1/memos/{memoId}/shares
- 共有先一覧: GET /api/v1/memos/{memoId}/shares
- 所有者による共有解除: DELETE /api/v1/memos/{memoId}/shares/{sharedWithUserId}
- 共有されたメモ一覧: GET /api/v1/shared-memos
- 共有されたユーザーによる共有解除: DELETE /api/v1/shared-memos/{memoId}
