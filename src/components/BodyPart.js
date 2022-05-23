import { Box, Text, List, ListItem, UnorderedList, Heading, Textarea } from "@chakra-ui/react";

import UsePosts from "../features/UsePosts";
import UsePost from "../features/UsePost";
import { useState, useEffect, React } from "react";

function BodyPart() {
    const [postsData, setPostsData] = useState([]);
    const [postId, setPostId] = useState(1);
    const { status, data, error, isFetching } = UsePosts();


    useEffect(() => {

        let dataCopy = data;
        setPostsData(dataCopy);
        //console.log(postsData);


    }, [postsData, data]);

    const ListP = () => {
        //console.log(postId);
        return (
            <div>
                {status === "loading" ? (
                    "Loading..."
                ) : status === "error" ? (
                    <span>Error: {error.message}</span>
                ) : (
                    <>
                        <UnorderedList>
                            {postsData && postsData.map((post) => (
                                <ListItem key={post.id} >
                                    <a href="#" onClick={() => setPostId(post.id)}>
                                        {post.title}

                                    </a>
                                </ListItem>
                            ))}

                        </UnorderedList>
                        <div>{isFetching ? "Background Updating..." : " "}</div>
                    </>
                )}
            </div>
        )
    }

    const PostSingle = ({ postId }) => {
        const { status, data, error, isFetching } = UsePost(postId);

        return (
            <div>

                {!postId || status === "loading" ? (
                    "Loading..."
                ) : status === "error" ? (
                    <span>Error: {error.message}</span>
                ) : (

                    <Box textAlign={'center'} >
                        <Box >
                            <Heading as={'h3'}>{data.title}</Heading>
                        </Box>
                        <hr color="black" /><br />
                        <Text color='gray.800'>
                            {data.body}
                        </Text>

                    </Box>
                )}
            </div>
        );
    }


    return (
        <Box pt={'8'} p='20px' display={'flex'} h='500px' bgGradient={'linear(to-l, rgb(208 204 200), #c583a4)'}>
            <Box w={300} border='2px' borderColor='black.200' overflow={'scroll'} p={'3px'} >
                <ListP />


            </Box>
            <Box w={900} border='2px' borderColor='black.200' m='5px' p={'8px'} >
                <PostSingle postId={postId} />
            </Box>

        </Box>

    )
}

export default BodyPart;