/* 
Створений репозиторій goit-react-hw-01-components.
Компоненти всіх завдань рендеряться на одній сторінці, всередині загального контейнера - кореневого компонента <App>.
При здачі домашньої роботи є посилання на репозиторій з вихідним кодом проекту.
У шапці репозиторія є посилання на живу сторінку на GitHub pages.
Під час відвідування робочої сторінки (GitHub pages) завдання, в консолі відсутні помилки і попередження.
Для кожного компонента є окрема папка з файлом React-компонента та файлом стилів.
Для всіх компонентів описані propTypes.
Все, що компонент очікує у вигляді пропсів, передається йому під час виклику.
Імена компонентів зрозумілі та описові.
JS-код чистий та зрозумілий, використовується Prettier.
Стилізація виконана CSS-модулями або Styled Components, тому класи в результуючому DOM відрізнятимуться від прикладів.
Достатньо базової стилізації застосунку, насамперед він повинен працювати, а вже потім бути гарним. Приділяй 20% часу на CSS і 80% на JS.
*/

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import data from 'data/data.json';
import user from 'data/user.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
