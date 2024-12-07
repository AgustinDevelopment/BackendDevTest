/**
 * @swagger
 * components:
 *   schemas:
 *     Campaign:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - goal
 *       properties:
 *         id:
 *           type: integer
 *           description: ID de la campaña
 *         title:
 *           type: string
 *           description: Título de la campaña
 *         description:
 *           type: string
 *           description: Descripción de la campaña
 *         goal:
 *           type: integer
 *           description: Meta de la campaña
 *         responsesCount:
 *           type: integer
 *           description: Número de respuestas
 *         status:
 *           type: string
 *           description: Estado de la campaña
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de actualización
 *     Insight:
 *       type: object
 *       required:
 *         - question
 *         - category
 *         - percentage
 *         - campaignId
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del insight
 *         question:
 *           type: string
 *           description: Pregunta del insight
 *         category:
 *           type: string
 *           description: Categoría del insight
 *         percentage:
 *           type: number
 *           description: Porcentaje del insight
 *         comments:
 *           type: array
 *           items:
 *             type: string
 *           description: Comentarios del insight
 *         campaignId:
 *           type: integer
 *           description: ID de la campaña asociada
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de actualización
 */

/**
 * @swagger
 * /api/campaigns:
 *   get:
 *     summary: Obtiene todas las campañas
 *     responses:
 *       200:
 *         description: Lista de campañas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Campaign'
 */

/**
 * @swagger
 * /api/campaigns:
 *   post:
 *     summary: Crea una nueva campaña
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Campaign'
 *     responses:
 *       201:
 *         description: Campaña creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Campaign'
 */

/**
 * @swagger
 * /api/campaigns/{id}:
 *   get:
 *     summary: Obtiene una campaña por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la campaña
 *     responses:
 *       200:
 *         description: Campaña encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Campaign'
 *       404:
 *         description: Campaña no encontrada
 */

/**
 * @swagger
 * /api/campaigns/{id}:
 *   put:
 *     summary: Actualiza una campaña por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la campaña
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Campaign'
 *     responses:
 *       200:
 *         description: Campaña actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Campaign'
 *       404:
 *         description: Campaña no encontrada
 */

/**
 * @swagger
 * /api/campaigns/{id}:
 *   delete:
 *     summary: Elimina una campaña por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la campaña
 *     responses:
 *       200:
 *         description: Campaña eliminada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Campaign'
 *       404:
 *         description: Campaña no encontrada
 */

/**
 * @swagger
 * /api/insights:
 *   get:
 *     summary: Obtiene todos los insights
 *     responses:
 *       200:
 *         description: Lista de insights
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Insight'
 */

/**
 * @swagger
 * /api/insights:
 *   post:
 *     summary: Crea un nuevo insight
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Insight'
 *     responses:
 *       201:
 *         description: Insight creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Insight'
 */

/**
 * @swagger
 * /api/insights/{id}:
 *   get:
 *     summary: Obtiene un insight por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del insight
 *     responses:
 *       200:
 *         description: Insight encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Insight'
 *       404:
 *         description: Insight no encontrado
 */

/**
 * @swagger
 * /api/insights/{id}:
 *   put:
 *     summary: Actualiza un insight por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del insight
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Insight'
 *     responses:
 *       200:
 *         description: Insight actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Insight'
 *       404:
 *         description: Insight no encontrado
 */

/**
 * @swagger
 * /api/insights/{id}:
 *   delete:
 *     summary: Elimina un insight por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del insight
 *     responses:
 *       200:
 *         description: Insight eliminado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Insight'
 *       404:
 *         description: Insight no encontrado
 */