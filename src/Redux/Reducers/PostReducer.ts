import { createReducer } from 'redux-smart-actions';
import PostState from '../States/PostState';

const defaultState: PostState = {
    posts: [
        {
            id: '1',
            title: 'I just need friends',
            favorited: 0,
            numberOfComments: 2,
            content: 'I just need friends that I can talk with and share my experiences with',
        },
        {
            id: '2',
            title:
                'What music has helped you get through the trials and tribulations of becoming/being a single parent?',
            favorited: 875,
            numberOfComments: 98,
            content:
                "I've got a whole list of random artist but mainly GHOSTEMANE, Lil Peep, Deftones, Queens Of The Stone Age are just top few",
        },
        {
            id: '3',
            title:
                'how will it affect a school age posthumous child telling him about death of father and how to introduce a possible stepdad?',
            favorited: 7,
            numberOfComments: 0,
            content:
                'i have a 6 month old baby boy and his biological father died tragically before he was born.\n' +
                '\n' +
                "suppose if i end up finding a good man who's willing to put a ring on it/become a stepfather/actual father within the next year or two, do i allow my baby to think he's his dad at least until he's mature of age or do i let him know when he's able to understand my words? to me i feel like he would be better off understanding that my (current boyfriend) husband is his step father. yes we are also talking about adoption..\n" +
                '\n' +
                "i sometimes wonder when and how i'll tell him about his real dad and it scares me to think of his reaction, and how it will affect him mentally and socially. i always want to be honest with him.",
        },
        {
            id: '4',
            title: 'I don’t know what to do',
            favorited: 1,
            numberOfComments: 0,
            content:
                'My ex and I share one kid who is 3\n' +
                '\n' +
                'he really hasn’t been the best father or supportive father with this. In August he convinced me he had changed and really wanted to make things work. I gave him a second chance. My birth control failed- I’m pregnant. We’ve since broken up again and I don’t know what to do.\n' +
                '\n' +
                'I don’t want to do this again\n' +
                '\n' +
                'I don’t want to go through this again with him With little to no support.\n' +
                '\n' +
                'Part of me considering having this child is because I’ll be done. I’ve always wanted kid to have a sibling but obviously in the right (better) circumstances\n' +
                '\n' +
                'I’m so torn. I know no one can tell me what to do but please help me figure this out 💔',
        },
        {
            id: '5',
            title: 'Kid gift-giving for abusive exes?',
            favorited: 76,
            numberOfComments: 2,
            content:
                'Do any folks in here co-parent with abusive exes? I would love to know how you handle gift-giving and celebrations in your respective families.\n' +
                '\n' +
                'Here’s my situation: My kids spend almost equal time with me and my ex, who was emotionally and verbally abusive during the last few years of our marriage and during our divorce. But since our split, he’s rebranded himself as SuperDad and has been very attentive to making sure our kids celebrate me and give gifts for things like my birthday, Mother’s Day, Chanukah, etc.\n' +
                '\n' +
                'Should I be doing the same thing for him? For what it’s worth, they have never asked to make him cards or gifts, and I would help them if they wanted to, but it’s not something I’ve encouraged. The idea of being generous to someone who treated me like dirt during what were already some of the most vulnerable moments of my life makes my skin crawl, but I also don’t want my kids to grow up resenting me for being less than enthused about engaging with their dad.',
        },
    ],
};

const postReducer = createReducer({}, defaultState);

export default postReducer;
