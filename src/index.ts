import {AppDataSource} from "./data-source"
import {User} from "./entity/User"
import {Article} from "./entity/Article";
import {Tag} from "./entity/Tag";

AppDataSource.initialize().then(async () => {
  /**
   * create data
   */
  // const a1 = new Article();
  // a1.title = 'aaaa';
  // a1.content = 'aaaaaaaaaa';
  //
  // const a2 = new Article();
  // a2.title = 'bbbbbb';
  // a2.content = 'bbbbbbbbbb';
  //
  // const t1 = new Tag();
  // t1.name = 'ttt1111';
  //
  // const t2 = new Tag();
  // t2.name = 'ttt2222';
  //
  // const t3 = new Tag();
  // t3.name = 'ttt33333';
  //
  // a1.tags = [t1,t2];
  // a2.tags = [t1,t2,t3];
  //
  // const entityManager = AppDataSource.manager;
  //
  // await entityManager.save(t1);
  // await entityManager.save(t2);
  // await entityManager.save(t3);
  //
  // await entityManager.save(a1);
  // await entityManager.save(a2);


  /**
   * query
   */
  const entityManager = AppDataSource.manager;
  // const article = await entityManager.find(Article, {
  //   relations: {
  //     tags: true
  //   }
  // });
  //
  // console.log(article);
  // console.log(article.map(item => item.tags))
//   也可以手动用 query builder 来 join 查询：
//   const article = await entityManager
//     .createQueryBuilder(Article, "a")
//     .leftJoinAndSelect("a.tags", "t")
//     .getMany()
//
//   console.log(article);
//   console.log(article.map(item=> item.tags))
//   或者先拿到 Article 的 Repository 再创建 query builder
//   const article = await entityManager
//     .getRepository(Article)
//     .createQueryBuilder( "a")
//     .leftJoinAndSelect("a.tags", "t")
//     .getMany()
//
//   console.log(article);
//   console.log(article.map(item=> item.tags))

  /**
   * add and delete
   */
  // const article = await entityManager.findOne(Article, {
  //   where: {
  //     id: 2
  //   },
  //   relations: {
  //     tags: true
  //   }
  // });
  //
  // article.title = "ccccc";
  //
  // article.tags = article.tags.filter(item => item.name.includes('ttt111'));
  //
  // await entityManager.save(article);
  // // 因为中间表的外键设置了 CASCADE 的级联删除，这样只要你删除了 article 或者 tag，它都会跟着删除关联记录
  // await entityManager.delete(Article, 1);
  // await entityManager.delete(Tag, 1);

  /**
   * 如果 tag 里也想有文章的引用呢？
   */
  const tags = await entityManager.find(Tag, {
    relations: {
      articles: true
    }
  });

  console.log(tags);

}).catch(error => console.log(error))


