import {
  shallowMount
} from '@vue/test-utils'
import MovieSummary from '.@/components/MovieSummary.vue'

describe(MovieSummary.vue, () => {
  test('Affiche le titre de film'), () => {
    const wrapper = shallowMount(MovieSummary, {
      props: {
        title: 'Thor',
        year: 2022,
        poster: 'http://via.placeholder.com/150',
      }
    });
    expect(wrapper.find('.poster')).toBe(img);
    expect(wrapper.exists('.poster')).toBe()
  }
});


test('metascore to be more than 10', ('metascore') => {
  expect(metascoretobemorethan()).toBeGreaterThan(10);
});

// console.log(wrapper)
// const txt = wrapper.text();
// expect(wrapper.text()).toContain('TheBatman');
// // console.log(expect(txt).toContain('TheBatman'););
// expect(wrapper.find('.title').exists()).toBe('the batman');
// expect(wrapper.find('.poster').exists()).toBe(true);
//pas sur
//  test.each(['.title', '.poster', '.title' ]){
//  () => {

//  }}
//   const wrapper = shallowMount(MovieSummary, {
//     props: {
//       title: 'Thor',
//       year: 2022,
//       poster: 'http://via.placeholder.com/150',
//     }
//   });
//   expect(wrapper.find('.poster')).toBe(img);


// // J'assigne { title: 'The Batman } un prop. à mon state
// wrapper.setData();
// // J'assigne une prop. à mon composant
// wrapper.setProps();
// // Je cherche un élément avec cet attribut
// wrapper.find('[data-test-id="poster"]');
// // Je cherche un élément avec la classe "poster"
// wrapper.find('.poster');
// // Je cherche un élément avec l'identifiant "poster"
// wrapper.find('#poster');
// // L'élément existe-t-il ?
// wrapper.exists();
// // Le rendu complet HTML de mon wrapper
// wrapper.html();
// // Le rendu textuel de mon wrapper
// wrapper.text();
