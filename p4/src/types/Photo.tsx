export type PhotoType = {
    id: string;
    width: number;
    height: number;
    urls: { full: string; regular: string; raw: string; small: string ;thumb: string};
    color: string | null;
    likes: number;
    user: {
        first_name: string;
        last_name: string | null;
        bio: string | null;
        username: string;
        name: string;
        links: {
            html: string;
        };
        profile_image: {
            small: string;
            medium: string;
            large: string;
        };
    };
    alt_description: string | null;
    description: string | null;

};