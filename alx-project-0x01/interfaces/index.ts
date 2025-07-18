// Define UserProps (for UserCard or props with full user info)
export interface UserProps {
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

// For the UserModal component
export interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (Post: UserProps) => void; 
  onAddUser?: (PostS: UserProps) => void;
}
// Post interfaces
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostData {
  userId: number;
  
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

