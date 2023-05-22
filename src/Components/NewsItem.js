import React, { Component } from 'react'

 class NewsItem extends Component {
    render() {
        let {tittle,description,imgUrl,newsUrl,author,date,source} = this.props;
        return (
          <div className="my-3">
          <div className="card" >
          <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'absolute',
                right: '0'
              }}>

          <span className="badge rounded-pill bg-danger">{source}</span>
              </div>
              <img src={!imgUrl?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAZlBMVEX////t7e3Jycnb29u4uLhwcHCmpqb5+fmDg4NdXV2Tk5NAQEBNTU0yMjIkJCT8/Pyfn5+ysrLk5OTz8/Nra2vR0dF3d3fBwcF9fX1HR0c5OTliYmKNjY0sLCxUVFQAAAAODg4WFhaGS/ZNAAAEAElEQVR4nO2a7ZaqIBiFBVQsNVA0zWxmzv3f5OFDC9FJT4q1zmL/m5bKw8vegDie5+Tk5OTk5OTk5OTk5PRJIrSg+M0M7c/tp30vAj6lXO8thGS47cxAJhj2rQM6B9UsA2bMIN1SIG2a0wBiggEDLnsQ1SmO40R//gQDs8uABMMte8ogy2CRwasbDhGDJwxEIjB7CB4QhUi1OWnEIEcCjO/cUMeUQzToVwb7ZeDdFGPRXH9l2KEMPBo3DvHIp8GgDGl7ysKFsOVX34zBsMNICJUyn+Ekg/Vc9oqELeN8gmEPQyoBwZDWEwzMVhkARMYvVEKUiqHhCLFiIJOGxOsXMBSnaTQMG0u0fNLv0zftaCdySXKE0Nqc1JckuTSU6RsHKGz50zkCUtg1Ny6DJEAoX4dAzpwhSeKvSmMgAc/nH3MmIiNDMoS2YPCqNJFqzpotcr5/i0aXsqEhcd4hoNVJqQ6NhLik7aPnwIfmrk60ih+/PQjWI/Aa+0msKOJw8ePAnWCjxQO0F+mKJD7ARUFjd4J8u7UDFU1ni3reYI9hyLedM6tDNyCXueeSLY0wFAsTFdNq5sLeClbWrjyKOUVczlzGtjaCJt6t8nq7zb/gbjE9P33+kqiRdx8GOP2/wqYW30lMvUhA6MHQNZu/SyqHpswN4UKFiclwuMxNUEqgGjHA1zYy0Qjh8LWsEOMyQLiM3tSKOkwwvFaHsR+KxX4oN/LDJ+TCyWlOi/YP2ObrP+LTFp29CmZZZetIChyLIgiKuaSDzPf9DNqoBfYDTsAZ4MyFua+ENp8TYH0NJEIx10GWKYasWvu+PRSKFEFwPc6PNIN3iu1sAWhRqCLUi9YsAqpuPPxyiy028UgVdASFv/SJGPUQ/suLlSZ47oxwpQ8nsHLq0bn2honLfkD81baAdyNorYK6rsfLeEWpfkAB7rZYex7VqkAG+sEDoXUUBabfGA3D0Nfv7VM6l+Y5HcW0dM0GRkDniDN0vcv77QkQDHTQZ4KyLRjy4qobQQi3HCE6qj9gdIy6NjLOEGbGNz4+cfurp0xQmsPp85GIuvMYfBRS45TLQpjpZTZOAZhE6A7uFUPXSiUKEe7x0h0Khv74WK+DxwQCnTun2UC5MOS5b2jA4JVyNGx/SuK5FFVo719NBgxY2tK3vYkuZRnuxhsyeGicz+2FRRXqx17KYFD5DO0WQuYyenTUZACS4bV3y4ViYiT0pcJk4IuGGA2b+VS51Oa9EYPMZ2gxnyqX+vQ/YuhsaS+fMhTt4P8fRgxeaDcarK61XP7CwJcNuvxDx78LUGNNmmDwkF/t8Z31KcPe+hyGN5+R++2x3WG1fipSZZU7bHJycnJycnJycnJycvos/QUT0T1ZtBGh5gAAAABJRU5ErkJggg==":imgUrl} className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">{tittle}</h5>
                  <p className="card-text">{description}...</p>
                  <p className="card-text"><small className="text-muted">By {!author?'Unknown':author} publish on {new Date(date).toGMTString()}</small></p>
                  <a href={newsUrl} rel="noreferrer" className="btn btn-sm btn-primary" target='_blank'>Read More</a>
              </div>
          </div>
      </div>
        )
      }
}

export default NewsItem;