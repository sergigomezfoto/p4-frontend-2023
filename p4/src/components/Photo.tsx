export type Photo = {
    id: number;
    width: number;
    height: number;
    urls: { large: string; regular: string; raw: string; small: string };
    color: string | null;
    user: {
        username: string;
        name: string;
    };
};

export const Photo: React.FC<{ photo: Photo }> = ({ photo }) => {
    const { user, urls } = photo;
    return (
        <>
            <img className="img" src={urls.small} alt="hola" />
            <a
                className="credit"
                target="_blank"
                href={`https://unsplash.com/@${user.username}`}
            >
                {user.name}
            </a>
        </>
    );
};