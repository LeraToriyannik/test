## Linux

#### 1 задание: Перейдите в папку html и выведите список всех папок(без файлов) 
```
ls -d /var/www/html/*/  #Вывод содержимых папок в папке html
```
#### 2 задание: Удалите пустые строки из файла error.txt
```
sed '/^$/d' error.txt
или
grep -v '^$' error.txt
```

#### 3 задание: Выведите список файлов с расширением .jpg в папке images
```
cd /var/www/html/images  #Переход в папку images
find -iname '*.jpg'  #Вывести файлы с расширением .jpg
или 
ls *.jpg /var/www/html/images 
```

#### 4 задание: Напишите bash скрипт который переименует все файлы в папке logs с .txt на .log
```
#! /bin/bash

#Сценарий запросит у пользователя каталог,  а затем cd в заданный каталог для обработки

echo "Введите целевой каталог"  
read /var/www/html/logs   
cd $ /var/www/html/logs   

#Запрашиваем старое расширение без точки 

echo "Введите расширение файла для поиска без точки"
read txt   

#Запрашиваем новое расширение без точки

echo "Введите новое расширение файла для переименования без точки"
read log  
echo " $ /var/www/html/logs, $ txt, $ log "

#Цикл будет искать в переданном каталоге все файлы со старым расширением и переименовывать их в новое расширение

for file in *.$txt
do
mv -v "$file" "${file%.$txt}.$log"
done;
```

#### 5 задание: Модифицируйте права доступа и владельца папки images следующим образом: Пользователь www-data и группа www-data имеют чтение/запись на всю директорию и на файлы внутри директории остальные не имеют доступа к папке и файлам.
```
sudo chown -R www-data:www-data /var/www/html/image  #Создаем пользователя и группу www-data
chmod -R ug=rw, o-rwx ~/images/  #Присваем пользователю и группе разрешение на чтение и запись у остальных отнимаем все права пользователя рекурсивно
или
chmod -R 660 ~/images/  #В числовом представлении
``` 

#### 6 задание: Удалите все содержимое в файле access.txt не удаляя сам файл.
```
cp /dev/null /var/www/html/logs/access.txt
или
cat /dev/null > /var/www/html/logs/access.txt
или
echo -n > /var/www/html/logs/access.txt
```

#### 7 задание: Выведите список файлов в папке images размер которых более 2 мегабайт
```
find /var/www/html/images -size +2M
```


## GIT
```
git init   
git add -A 
git commit -m 'Initial commit'
git remove add origin https//:git@example.com:example/test.git
git pull -u origin main
git push origin main
```


## MongoDB
#### 1 задание: Выведите 10 записей из коллекции posts пропустив первые 5 и сделайте сортировку в алфавитном порядке по полю author
```
db.posts.find().sort({autor:1}).skip(5).limit(10)
```
#### 2 задание: Выведите все записи у которых dislike меньше  100
```
db.posts.find({dislike:{$lt:100}})
```
#### 3 задание: Увеличить like на +1 во всех posts  у который author  === 'a1' 
```
db.posts.updateMany({author:"a1"},{$inc:{like:1}})
```
#### 4 задание: Выведите список title и их общее количество dislike
```
db.posts.aggredate([{$group:{_id:"$title", total_dislike:{$sum: "$dislike"}}}])
```