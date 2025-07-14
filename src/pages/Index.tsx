import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from '@/components/ui/icon';

const Index = () => {
  const recentUsers = [
    {
      id: 1,
      name: "Анна",
      age: 25,
      location: "Москва",
      interests: ["Йога", "Фотография", "Путешествия"],
      verified: true,
      distance: "2 км",
      avatar: "/img/7341807b-c2f7-4766-a666-342cc7540d68.jpg"
    },
    {
      id: 2,
      name: "Дмитрий",
      age: 28,
      location: "Санкт-Петербург",
      interests: ["Спорт", "Кино", "Кулинария"],
      verified: true,
      distance: "5 км",
      avatar: "/img/0edab24f-78eb-4bba-9a32-2aff5707cef9.jpg"
    },
    {
      id: 3,
      name: "Екатерина",
      age: 23,
      location: "Новосибирск",
      interests: ["Музыка", "Книги", "Танцы"],
      verified: false,
      distance: "1 км",
      avatar: "/img/7341807b-c2f7-4766-a666-342cc7540d68.jpg"
    }
  ];

  const articles = [
    {
      id: 1,
      title: "Как создать идеальный профиль для знакомств",
      description: "Секреты привлекательного профиля, которые помогут найти вторую половинку",
      readTime: "5 мин",
      category: "Советы"
    },
    {
      id: 2,
      title: "Первое свидание: топ-10 идей",
      description: "Оригинальные варианты для незабываемого первого свидания",
      readTime: "7 мин",
      category: "Свидания"
    },
    {
      id: 3,
      title: "Безопасность в онлайн знакомствах",
      description: "Важные правила безопасности при общении в интернете",
      readTime: "4 мин",
      category: "Безопасность"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-romantic-50 via-white to-mint-50">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Heart" size={28} className="text-romantic-500" />
            <h1 className="text-2xl font-bold gradient-romantic-text">Солнце Моё</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-romantic-500 transition-colors">Поиск</a>
            <a href="#" className="text-gray-700 hover:text-romantic-500 transition-colors">Сообщения</a>
            <a href="#" className="text-gray-700 hover:text-romantic-500 transition-colors">Блог</a>
            <Button variant="outline" className="border-romantic-200 text-romantic-600 hover:bg-romantic-50">
              Войти
            </Button>
            <Button className="bg-romantic-500 hover:bg-romantic-600">
              Регистрация
            </Button>
          </nav>
          <Button variant="ghost" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold gradient-romantic-text mb-6">
              Найди свою любовь
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Современная платформа знакомств с видеочатом, верификацией профилей и умным поиском совместимости
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-romantic-500 hover:bg-romantic-600 px-8 py-4 text-lg">
                <Icon name="Heart" size={20} className="mr-2" />
                Начать знакомства
              </Button>
              <Button size="lg" variant="outline" className="border-romantic-200 text-romantic-600 hover:bg-romantic-50 px-8 py-4 text-lg">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть видео
              </Button>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-4 gap-6 mt-16 animate-slide-in">
            <Card className="glass-effect hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Icon name="Video" size={40} className="text-romantic-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Видеочат</h3>
                <p className="text-sm text-gray-600">Живое общение через видеосвязь</p>
              </CardContent>
            </Card>
            <Card className="glass-effect hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Icon name="Shield" size={40} className="text-mint-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Верификация</h3>
                <p className="text-sm text-gray-600">Проверенные профили пользователей</p>
              </CardContent>
            </Card>
            <Card className="glass-effect hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Icon name="MapPin" size={40} className="text-coral-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Геолокация</h3>
                <p className="text-sm text-gray-600">Поиск людей рядом с вами</p>
              </CardContent>
            </Card>
            <Card className="glass-effect hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Icon name="Zap" size={40} className="text-navy-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Совместимость</h3>
                <p className="text-sm text-gray-600">Умный алгоритм подбора</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Users Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Новые участники
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Познакомьтесь с людьми, которые только что присоединились к нашему сообществу
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {recentUsers.map((user, index) => (
              <Card key={user.id} className="glass-effect hover:shadow-xl transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      {user.verified && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-mint-500 rounded-full flex items-center justify-center">
                          <Icon name="Check" size={12} className="text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">{user.name}, {user.age}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <Icon name="MapPin" size={14} className="mr-1" />
                          {user.distance}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{user.location}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {user.interests.map((interest, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-romantic-100 text-romantic-700 text-xs">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1 bg-romantic-500 hover:bg-romantic-600">
                          <Icon name="Heart" size={14} className="mr-1" />
                          Лайк
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 border-mint-200 text-mint-600 hover:bg-mint-50">
                          <Icon name="MessageCircle" size={14} className="mr-1" />
                          Чат
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="border-romantic-200 text-romantic-600 hover:bg-romantic-50">
              Посмотреть всех
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Полезные статьи
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Советы экспертов о знакомствах, отношениях и любви
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card key={article.id} className="glass-effect hover:shadow-xl transition-all duration-300 group cursor-pointer animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-coral-200 text-coral-600">
                      {article.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <CardTitle className="group-hover:text-romantic-600 transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-between text-romantic-600 hover:bg-romantic-50">
                    Читать статью
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-romantic">
        <div className="container mx-auto text-center">
          <div className="animate-float">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Готовы найти любовь?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам счастливых пар, которые нашли друг друга на нашей платформе
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-romantic-600 hover:bg-gray-50 px-8 py-4 text-lg">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Создать профиль бесплатно
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Heart" size={24} className="text-romantic-500" />
                <h3 className="text-xl font-bold">Солнце Моё</h3>
              </div>
              <p className="text-gray-400">
                Современная платформа для серьезных знакомств
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Возможности</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Поиск партнера</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Видеочат</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Верификация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Совместимость</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Facebook" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 ZILANT FILFULMENT. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;