- First we want data so we make a data file that contains product. 
- Then we render it in components section.
- Now we want that add to cart section is accessible everywhere so we will use useContext
- Thoda logic change kar rhe hai. We are writing all functions in cart provider. Like handle Add etc and will pass the function as argument not dispatch
- Jo modal hai wo hum root ke bahar rakhte hai . Acchi practice hoti hai seperate karna.CSS wagera apply karne mein kabhi dikkat na aaye
- Kya hai ki modal mein do cheez hoti hai. Jaise add to cart section khola to ek chota sa rectangle shape ka ban ke aagya . ab jo rectangle hai usko alawa jo hai wo blackroom hai . To ye content hai model mein.
- Ab hum logic likh rhe hai ki add cart pe click kare to model khul jaaye aur blackdrop pe click karein to band
- To khud socho ye kha likhayega ? obviously header mein
- Model open hone ke baad bhi hum scroll kar paa rhe hai background mein ussi ke liye hum useEffect call karenge aur overflowy hidden kar denge
- Ek hi item baar baar add to cart ho rha hai. usko shi karne ke liye hum jab add karenge tabhi check kar lenge
- quantity increase karne ke liye jaise hum useState karke kiye hai waise bhi kar sakte ho . ya phir useReducer banaye ho usme banado same function
- Container jo banaye hai wo bas  ARC shop aur cart ko center karne ke liye
- Jo cart wala hai usme 2 div bna rhe hai ek jisme image aur naam hoga doosre mein baaki sab