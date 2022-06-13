const router = require('express').Router()
const News = require('../models/news')
const Category = require('../models/category')
const { v4 } = require('uuid')
const { Types } = require('mongoose')

router.get('/',  async (req, res) => {
    const limit = Number(req.query.limit) || 10
    const skip = Number(req.query.offset) || 0
    const { _id } = req.local || {}

    let findCondition = {}
    if (_id) {
        const user = await User.findById(_id)

        const categoryIds = user.categoryIds

        if (categoryIds) {
            findCondition = { categoryId: { $in: categoryIds } }
        }
    }

    const news = await News
        .find(findCondition)
        .select({ description: 0 })
        .limit(limit)
        .sort({ createdAt: -1 })
        .skip(skip)

    res.json(news)
})

router.get('/search/:query', async (req, res) => {
    const { query } = req.query
    const limit = Number(req.query.limit) || 10
    const skip = Number(req.query.skip) || 0

    const news = await News
        .find({ title: query })
        .limit(limit)
        .skip(skip)

    res.json(news)
})

router.post('/new',  async (req, res) => {
    const news= new News({
  Title: req.body.newsTitile,
  Description:req.body.newsDescription,
  Author: req.body.newsAuthor,
  location: req.body.newsLocation,
  tags: req.body.newsTags,
  totalViews: req.body.newsViews,
  category:req.body.newsCategory,
  categoryId:req.body.newsCategoryId
})
news.save()
.then(news=>{
  res.send(news)
}).catch(err=>{
  res.status(500).send('news not found in db')
})

})

router.get('/:newsId',  async (req, res) => {
    const { newsId } = req.params
    const { _id } = req.local || {}

    if (!Types.ObjectId.isValid(newsId)) {
        return res.status(400).json('Invalid news id')
    }

    let news = await News.findById(newsId)

    let isFavorite = false

    news = news.toObject()

    if (_id) {
        const favoriteNewsIds = await User.findById(_id).favoriteNewsIds
        isFavorite = favoriteNewsIds.contains(news._id)
    }

    res.json({ ...news, isFavorite })
})

router.patch('/:newsId',  async (req, res) => {
    let { title, description, categoryId } = req.body
    const { newsId } = req.params


    if (!Types.ObjectId.isValid(newsId)) {
        return res.status(400).json('Invalid news id')
    }

    const news = await News.findById(newsId)

    news.title = title
    news.description = description
     news.Author=Author,
     news.Location=location,
     news.Tags=tags,
     news.totalViews=totalViews,
    news.Category=Category,
    news.categoryId = categoryId
    await news.save()

    res.json('News updated successfully')
})



module.exports = router