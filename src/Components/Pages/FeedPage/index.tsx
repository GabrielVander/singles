import React, { ReactElement } from 'react';
import { Button, Grid, Heading, Main, ResponsiveContext } from 'grommet';
import PostCard from '../../Commom/PostCard';
import { useSelector } from 'react-redux';
import Post from '../../../Models/Post';
import RootState from '../../../Redux/States/RootState';
import { Add } from 'grommet-icons';
import './styles.css';

function FeedPage(): ReactElement {
    const posts: Post[] = useSelector<RootState>((state): Post[] => state.post.posts) as Post[];

    return (
        <>
            <Main pad="small" flex="grow">
                <Heading>Feed</Heading>
                <ResponsiveContext.Consumer>
                    {(size): ReactElement => (
                        <Grid
                            align="start"
                            columns={
                                size !== 'small' && size !== 'xsmall' ? { count: 'fill', size: 'medium' } : undefined
                            }
                            gap="medium"
                        >
                            {posts.map((post: Post) => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </Grid>
                    )}
                </ResponsiveContext.Consumer>
                <Button size="large" margin="small" primary className="fab" icon={<Add />} />
            </Main>
        </>
    );
}

export default FeedPage;
