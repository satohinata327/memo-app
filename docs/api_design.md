# 認証
1. 機能一覧
アカウントの新規作成ができる
アカウントのログイン・ログアウトが可能
(メールアドレスを用いて認証)

2. 対応するエンドポイント
新規作成: POST /users
ログイン: POST /auth/login
ログアウト: POST /auth/logout

# フォルダ機能
1. 機能一覧
フォルダが一覧できる
フォルダを新規作成できる
フォルダの名前を編集できる
フォルダを削除できる

2. 対応するエンドポイント
一覧: GET /folders
新規作成: POST /folders
編集: PATCH /folders/:folder
削除: DELETE /folders/:folder

# メモ機能
1. 機能一覧
フォルダの中にメモを新規作成できる
フォルダを作成せずともメモを新規作成できる(元々一つの大きなフォルダがある)
メモを編集できる
メモを削除できる


2. 対応するエンドポイント
新規作成: POST /folders/:folderId/memos
新規作成(フォルダなし): POST /folders/memos
編集: PATCH /folders/:folderId/memos/:memoId
削除: DELETE /folders/:folderId/memos/:memoId

# 共有機能
1. 機能一覧
メモを共有できる
    受け取れる、送れる

2. 対応するエンドポイント
共有: POST /folders/:folderId/memos/:memoId
