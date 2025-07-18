export interface UserProps {
  id: number;
  name: string;
  userId: number;
  title: string;
  body: string;


  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
// interfaces/index.ts

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}
// UserData Interface
export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// UserModalProps Interface
export interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddUser: (user: UserData) => void; // ← This must exist
  onSubmit: (user: UserData) => void;
}
