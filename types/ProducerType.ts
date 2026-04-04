export default interface ProducerType {
    favorites: number,
    images: {
        jpg: {
            image_url: string
        }
    },
    mal_id: number,
    titles: {
       title: string,
    }[],
    url: string,
    count: number,
}