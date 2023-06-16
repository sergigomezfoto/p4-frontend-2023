export type PhotoType = {
    id: string;
    width: number;
    height: number;
    urls: { large: string; regular: string; raw: string; small: string };
    color: string | null;
    user: {
        username: string;
        name: string;
        links: {
            html: string;         
          };
    };
    alt_description: string | null;
    description: string | null;
};