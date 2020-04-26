<template>
  <div class="contact">
    <OrganizationTree
      :test="testdata"
      @func="getMsgFormSon"/>
  </div>
</template>

<script>
import OrganizationTree from '../../components/organization-tree.vue'

export default {
  name: 'Organization',
  components: {
    OrganizationTree
  },
  data () {
    return {
      msg: 'Welcome to Your Home.js App',
      testdata: [
        {
          id: '1',
          name: '上海技术股份有限公司',
          children: [
            {
              id: '2',
              name: 'CEO',
              children: [
                {
                  id: '3',
                  name: '贺琦'
                }
              ]
            },
            {
              id: '4',
              name: '产品部',
              children: [
                {
                  id: '5',
                  name: '贺琦'
                },
                {
                  id: '6',
                  name: '测试'
                }
              ]
            },
            {
              name: '技术部',
              children: [
                {
                  name: '技术一部',
                  children: [
                    {
                      name: '技术1'
                    },
                    {
                      name: '技术2'
                    },
                    {
                      name: '技术3'
                    }
                  ]
                },
                {
                  name: '技术二部',
                  children: [
                    {
                      name: '技术1'
                    },
                    {
                      name: '技术2'
                    },
                    {
                      name: '技术3'
                    }
                  ]
                },
                {
                  name: '技术三部',
                  children: [
                    {
                      name: '技术1'
                    },
                    {
                      name: '技术2'
                    }
                  ]
                }
              ]
            },
            {
              name: '交付部',
              children: [
                {
                  name: '交付一部',
                  children: [
                    {
                      name: '技术1'
                    },
                    {
                      name: '技术2'
                    },
                    {
                      name: '技术3'
                    }
                  ]
                },
                {
                  name: '交付二部',
                  children: [
                    {
                      name: '技术1'
                    },
                    {
                      name: '技术2'
                    },
                    {
                      name: '技术3'
                    }
                  ]
                }
              ]
            },
            {
              name: '客服部',
              children: [
                {
                  name: '技术1'
                },
                {
                  name: '技术2'
                }
              ]
            },
            {
              name: '财务部',
              children: [
                {
                  name: '张三'
                },
                {
                  name: '李四'
                }
              ]
            },
            {
              name: '行政部',
              children: [
                {
                  name: '张三',
                  children: [
                    {
                      name: '李四'
                    },
                    {
                      name: '王五'
                    },
                    {
                      name: '小六'
                    }
                  ]
                },
                {
                  name: '张三',
                  children: [
                    {
                      name: '李四'
                    }
                  ]
                }
              ]
            },
            {
              name: '技术部',
              children: [
                {
                  name: '张三'
                },
                {
                  name: '李四'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    getMsgFormSon () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contact{
    margin-bottom: 60px;
  }
</style>
