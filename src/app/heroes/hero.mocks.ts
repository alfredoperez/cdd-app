import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Hero } from '../shared';
import { ApiMock } from '../utils/storybook/api-mock.models';

const data = {
  hero: {
    id: 1,
    name: 'Superman',
    avatarUrl: 'https://www.superherodb.com/pictures2/portraits/10/100/791.jpg',
    powers: [
      {
        id: 1,
        name: 'Super Strength',
      },
      {
        id: 2,
        name: 'Super Speed',
      },
    ],
    price: 1000000,
    saves: 100,
    fans: 1000,
  } as Hero,
  heroWithoutPowers: {
    id: 2,
    name: 'Batman',
    avatarUrl:
      'https://www.superherodb.com/pictures2/portraits/10/050/43302.jpg',
    price: 56,
    saves: 100,
    fans: 99999,
  },
};

const urls = {
  heroes: 'heroes',
};
/// TODO: how to avoid the `as unknown`
const requests = {
  heroes: {
    method: 'GET',
    url: urls.heroes,
  } as unknown as HttpRequest<Hero>,
};

const apis = {
  heroes: {
    request: requests.heroes,
    response: {
      body: [data.hero, data.heroWithoutPowers],
      status: 200,
    } as HttpResponse<Hero[]>,
  } as unknown as ApiMock<Hero>,
  heroesWithoutData: {
    request: requests.heroes,
    response: {
      body: {},
      status: 200,
    } as HttpResponse<Hero[]>,
  } as unknown as ApiMock<Hero>,
};

export const HeroesMocks = { data, urls, requests, apis };
