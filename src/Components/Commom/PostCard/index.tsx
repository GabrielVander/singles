import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from 'grommet';
import React, { ReactElement, useState } from 'react';
import Post from '../../../Models/Post';
import { Chat, Favorite } from 'grommet-icons';

interface PostCardProps {
    post: Post;
}

function PostCard({ post }: PostCardProps): ReactElement {
    const [cardAnimation, setCardAnimation] = useState<'zoomIn' | undefined>(undefined);

    return (
        <Card
            align="center"
            pad="small"
            background={{
                color: 'white',
            }}
            round="medium"
            elevation="xlarge"
            margin="medium"
            direction="column"
            animation={cardAnimation}
            onMouseEnter={(): void => setCardAnimation('zoomIn')}
            onMouseLeave={(): void => setCardAnimation(undefined)}
            alignSelf="center"
            hoverIndicator={true}
        >
            <CardHeader flex={true}>
                <Heading level={'3'}>{post.title}</Heading>
            </CardHeader>
            <CardBody flex={true}>
                <Text size="small" margin="medium" textAlign="center" truncate={true}>
                    {post.content}
                </Text>
            </CardBody>
            <CardFooter fill={'horizontal'} justify={'around'}>
                <Box direction={'row'} align={'center'}>
                    <Button icon={<Favorite color="red" />} hoverIndicator />
                    {post.favorited}
                </Box>
                <Box direction={'row'} align={'center'}>
                    <Button icon={<Chat color="plain" />} hoverIndicator />
                    {post.numberOfComments}
                </Box>
            </CardFooter>
        </Card>
    );
}

export default PostCard;
