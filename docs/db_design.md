# DB設計

## メモ共有
- メモの所有者は、接続済みのユーザーにメモを共有できる
- 共有先は複数指定できる
- 共有されたユーザーはメモを閲覧できる
- 共有されたユーザーはメモを編集・削除できない
- メモの所有者は共有を解除できる
- 同一ユーザーへの重複共有はできない

## 対象外
- 共有されたユーザーによる編集
- リアルタイム共同編集
- 編集履歴
- コメント
- 公開URLによる共有

## ER図

```mermaid
erDiagram
    Users {
        INT user_id PK
        VARCHAR email UK
        VARCHAR password_hash
    }

    Folders {
        INT folder_id PK
        INT user_id FK
        VARCHAR folder_name
    }

    Memos {
        INT memo_id PK
        INT folder_id FK
        INT owner_user_id FK
        VARCHAR memo_name
        TEXT memo_content
    }

    User_Connections {
        INT requester_user_id PK, FK
        INT addressee_user_id PK, FK
        VARCHAR status
    }

    Memo_Shares {
        INT memo_id PK, FK
        INT shared_with_user_id PK, FK
    }

    Users ||--o{ Folders : "owns"
    Folders ||--o{ Memos : "contains"
    Users ||--o{ Memos : "owns"
    Users ||--o{ User_Connections : "requests"
    Users ||--o{ User_Connections : "receives"
    Memos ||--o{ Memo_Shares : "is shared through"
    Users ||--o{ Memo_Shares : "receives"
```