export class ApiResponse {
  total_count: number;
  incomplete_results: boolean;
  items: Item[];
}

export class Item {
  owner: Owner;
  full_name: string;
  created_at: string;
  updated_at: string;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  default_branch: string;
}

export class Owner {
  login: string;
  avatar_url: string;
  type: string;
}